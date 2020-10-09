import API from '../src/LeaderBoard'

global.fetch = jest
  .fn()
  .mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve({"result": "Post made successfully"}),
    })
  )
  .mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve({result: [{user: "Samuel", score: 100}] }),
    })
  );

it("Post to the API successfully", async() => {
  const returnData = await API.postScore()
  expect(returnData).toEqual({"result": "Post made successfully"})
})

it("Returns the correct data from the API", async() => {
  const data =  await API.getScores()
  expect(data).toEqual({result: [{user: "Samuel", score: 100}] })
})


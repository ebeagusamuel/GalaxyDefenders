import API from '../src/LeaderBoard'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({result: [{user: "Samuel", score: 100}] }),
  })
);

it("Returns the correct data from the API", async() => {
  const data =  await API.getScores()

  expect(data).toEqual({result: [{user: "Samuel", score: 100}] })
})
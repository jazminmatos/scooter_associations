
const { App, User, Station, Scooter } = require('../src/index')
const {sequelize} = require('../sequelize_index')


describe('Models initialized', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true })
  })

  test('app has been created', async () => {
    const AppTest = await App.create({ name: "MVP" })
    expect(AppTest.name).toBe("MVP") 
  })
  test('user has been created', async () => {
    const UserTest = await User.create({ name: "Danny" })
    expect(UserTest.name).toBe("Danny") 
  })

  test("scooter has been created", async () => {
    const ScooterTest = await Scooter.create({ scooterID: "1" })
    expect(ScooterTest.scooterID).toBe("1")
  })

  test("station has been created", async () => {
    const StationTest = await Station.create({ name: "GooglePlex" })
    expect(StationTest.name).toBe("GooglePlex")
  })
})

describe('Model associations', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true })
  })


  test('app has many users', async () => {
    const AppTest = await App.create({ name: "MVPv2" })
    const UserTest = await User.create({ name: "Jazmin" })
    await AppTest.addUser(UserTest)
    const users = await AppTest.getUsers()
    expect(users[0].name).toBe("Jazmin") 
    expect(users[0] instanceof App).toBeTruthy;


  })


  test('app has many stations', async () => {
    const AppTest = await App.create({ name: "MVPv3" })
    const StationTest = await Station.create({ name: "Hudson Yards" })
    await AppTest.addStation(StationTest)
    const stations = await AppTest.getStations()
    expect(stations[0].name).toBe("Hudson Yards") 
    expect(stations[0] instanceof App).toBeTruthy;
  })


  test('user has a scooter', async () => {
    const UserTest = await User.create({ name: "Mamadou" })
    const ScooterTest = await Scooter.create({ scooterID: "1x3" })
    await UserTest.addScooter(ScooterTest)
    const scooters = await UserTest.getScooters()
    expect(scooters[0].scooterID).toBe("1x3") 
    expect(scooters.length < 2).toBe(true)
    expect(scooters[0] instanceof User).toBeTruthy;
  })


test('station has many scooters', async () => {
  const StationTest = await Station.create({ name: "Chelsea Piers" })
  const ScooterTestv1 = await Scooter.create({ scooterID: "101010101" })
  const ScooterTestv2 = await Scooter.create({ scooterID: "123456789" })
  await StationTest.addScooter(ScooterTestv1)
  await StationTest.addScooter(ScooterTestv2)
  const scooters = await StationTest.getScooters()
  expect(scooters.length > 0).toBe(true) 
  expect(scooters[0].scooterID).toBe("101010101")
  expect(scooters[1].scooterID).toBe("123456789")
  expect(scooters[0] instanceof Station).toBeTruthy;
})


})


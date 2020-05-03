import TechnologyProvider from '../../../scripts/technologies/TechnologyProvider'
import TechnologyStorage from '../../../scripts/technologies/TechnologyStorage'
import Technology from '../../../scripts/technologies/Technology'

let technologyStorage: TechnologyStorage
let techs: Array<Tech>

type Tech = {
  name: string
  isSkill: boolean
}

class TechnologyProviderStub implements TechnologyProvider {

  items: Map<string, Technology>

  constructor(techArr: Array<Tech>) {
    this.items = new Map<string, Technology>()
    techArr.forEach(t => this.items.set(t.name, new Technology(t.name, null, t.isSkill)))
  }
}

beforeAll(() => {
  techs = new Array<Tech>(
    { name: 'tech-1', isSkill: true },
    { name: 'tech-2', isSkill: false }
  )
  technologyStorage = new TechnologyStorage(new TechnologyProviderStub(techs))
})

test('TechnologyStorage should return Technology by name correctly', () => {
  const actual = technologyStorage.findByName(techs[0].name)
  expect(actual.name).toBe(techs[0].name)
  expect(actual.isSkill).toBe(techs[0].isSkill)
})

test('TechnologyStorage should return new Technology by name in case it does not exist', () => {
  const name = 'notExistingName'
  const actual: Technology = technologyStorage.findByName(name)
  expect(actual).not.toBeNull()
  expect(actual.name).toBe(name)
})

test('TechnologyStorage should return Technologies by isSkill correctly', () => {
  const actual: Technology[] = technologyStorage.findBySkill(false)
  expect(actual.length).toBe(1)
  expect(actual[0].name).toBe(techs[1].name)
  expect(actual[0].isSkill).toBe(techs[1].isSkill)
})

test('TechnologyStorage should return empty array by isSkill in case no such items', () => {
  const ts = new TechnologyStorage(new TechnologyProviderStub([{ name: 'tech-3', isSkill: false }]))
  const actual: Technology[] = ts.findBySkill(true)
  expect(actual).not.toBeNull()
  expect(actual.length).toBe(0)
})
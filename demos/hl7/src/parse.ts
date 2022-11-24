import { getAge } from './utils/index'
// @ts-ignore
import HL7 from 'hl7-standard'

const tableFieldMap = {
  ADT_A01: {
    // default
    registerName: 'PID.5.1',
    gender: 'PID.8',
    age: 'PID.7',
    hospitalizationType: 'PV1.14',
    arriveDate: 'PV1.44',
    departureDate: 'PV1.45',
    vitalSigns: '',
    // custom
    type: 'PV1.2',
    dischargeStatus: 'ZPV.3',
    // other
    id: 'PID.2',
    visitCount: 'PV1.19',
  },
}

// type Fuck =

const StageKey = ['C', 'F'] as any[]

const EventMap = {
  C: '入院',
  F: '出院',
  Z: '变更护理等级',
}

const GenderMap = {
  0: '未知的性别',
  1: '男',
  2: '女',
  9: '未说明的性别',
}

const TypeMap = {
  1: '门诊患者',
  2: '住院患者',
  3: '体检患者',
}

const HospitalizationTypeMap = {
  1: '急诊',
  2: '门诊',
  3: '其他医疗机构转入',
  4: '其他',
}

export const parse = (str: string) => {
  // 事件类型代码
  console.log('====================================')
  const hl7 = new HL7(str)
  hl7.transform()

  const messageType = hl7.get('MSH.9.3') as keyof typeof tableFieldMap
  console.log('消息类型', messageType)

  const eventType = hl7.get('EVN.1') as keyof typeof EventMap
  console.log('事件类型', eventType, EventMap[eventType])

  const fieldMap = tableFieldMap[messageType]

  const id = hl7.get(fieldMap.id)
  const visitCount = hl7.get(fieldMap.visitCount)
  const visitNumber = `${id}${visitCount}`
  console.log('就诊号', visitNumber)

  const registerName = hl7.get(fieldMap.registerName)
  console.log('名字', registerName)

  const gender = hl7.get(fieldMap.gender) as keyof typeof GenderMap
  console.log('性别', gender, GenderMap[gender])

  const _age = hl7.get(fieldMap.age)
  const age = getAge(_age)
  console.log('年龄', age)

  const type = hl7.get(fieldMap.type) as keyof typeof TypeMap
  console.log('患者类别', type, TypeMap[type])

  const hospitalizationType = hl7.get(fieldMap.hospitalizationType) as keyof typeof HospitalizationTypeMap
  console.log('来源方式', hospitalizationType, HospitalizationTypeMap[hospitalizationType])

  const arriveDate = hl7.get(fieldMap.arriveDate)
  console.log('入院时间', arriveDate)

  const departureDate = hl7.get(fieldMap.departureDate)
  console.log('出院时间', departureDate)

  const dischargeStatus = hl7.get(fieldMap.dischargeStatus)
  console.log('出院情况', dischargeStatus)

  const status = StageKey.includes(eventType) ? EventMap[eventType] : '未知'
  console.log('病患状态', status)

  console.log('====================================')
  return {
    visitNumber,
    registerName,
    gender,
    age,
    type,
    hospitalizationType,
    arriveDate,
    departureDate,
    dischargeStatus,
    status,
  }
}

/**
 * Typed constants for corporate clients
 * This provides type safety and follows the architectural pattern
 */
export const COMPANIES = [
  {
    name: 'ОАО «ЛУКОЙЛ»',
    data: 'luk',
  },
  {
    name: 'Нижегородский институт радиотехники (ННИИРТ)',
    data: 'niirt',
  },
  {
    name: 'ООО «Ульяновский механический завод»',
    data: 'umz',
  },
  {
    name: 'ОАО «Нижегородский водоканал»',
    data: 'vodokanal',
  },
  {
    name: 'АО «Арзамасский приборостроительный завод»',
    data: 'arzam',
  },
  {
    name: 'ООО «Газпромтрансгаз – Нижний Новгород»',
    data: 'gazprom',
  },
  {
    name: 'Приволжский окружной медицинский центр ФМБА РФ',
    data: 'pomc',
  },
  {
    name: 'Нижегородский областной клинический онкологический диспансер',
    data: 'onk',
  },
  {
    name: 'ZTM logistics Единый логистический оператор',
    data: 'ztm',
  },
  {
    name: 'ГК «СОНЕТ»',
    data: 'sonet',
  },
  {
    name: 'ООО «МОСТ»',
    data: 'most',
  },
  {
    name: 'ГК «ABI GROUP»',
    data: 'abi',
  },
  {
    name: 'KPMG International Limited (международная сеть аудиторских и консалтинговых фирм)',
    data: 'kpmg',
  },
  {
    name: 'АО «Страховая группа МСК»',
    data: 'msk',
  },
  {
    name: 'ОАО Судоремонтный завод «ППК»',
    data: 'ppk',
  },
  {
    name: '«Headhunter – Поволжье»',
    data: 'hh',
  },
  {
    name: 'ГК «JAF РУС»',
    data: 'jaf',
  },
  {
    name: 'ГК «ХАЛТЕК»',
    data: 'haltek',
  },
  {
    name: 'Нижегородский государственный университет им. Н.И. Лобачевского (ННГУ)',
    data: 'nngu',
  },
  {
    name: 'ПАО «Т Плюс»',
    data: 'tplus',
  },
  {
    name: 'Волжское пароходство',
    data: 'volga',
  },
  {
    name: 'Ювелирная мастерская «Markin Fine Jewellery»',
    data: 'markin',
  },
  {
    name: 'ООО «Делмари» (юридическая компания)',
    data: 'delmari',
  },
  {
    name: 'ООО «МТР Дизайн»',
    data: 'mtr',
  },
  {
    name: 'ООО «Первей» (поставщик медецинского оборудования)',
    data: 'pervey',
  },
  {
    name: 'Нижегородская областная детская клиническая больница',
    data: 'nodkb',
  },
  {
    name: 'ТД «ПЕМКО»',
    data: 'pemko',
  },
  {
    name: 'ООО «Бейби Трейд»',
    data: 'babytrade',
  },
  {
    name: 'ОАО «Хлеб» Н. Новгород',
    data: 'hleb',
  },
  {
    name: '«Монолит-Недвижимость» Н. Новгород',
    data: 'monolit',
  },
  {
    name: 'Клиника «Беркана» Москва',
    data: 'berkana',
  },
  {
    name: 'ГК «Рельеф» г. Рязань',
    data: 'relief',
  },
] as const

export type Company = (typeof COMPANIES)[number]
export type CompaniesData = typeof COMPANIES

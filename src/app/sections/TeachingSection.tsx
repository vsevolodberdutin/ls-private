'use client'

import React, { useState } from 'react'
import {
  Users,
  Settings,
  UserPlus,
  Brain,
  ShipWheel,
  Crown,
  UserRoundSearch,
  Video,
  MessageSquare,
  ClipboardList,
  GraduationCap,
  Target,
  Headset,
} from 'lucide-react'
import { TEACHING_SERVICES } from '@/constants/services'
import { INTERNATIONAL_PRICING_FOOTNOTE } from '@/constants/contacts'

import { ContactCard } from '@/app/components/shared/ContactCard'
import { GalleryCard } from '@/app/components/shared/GalleryCard'
import { ImagePopup } from '@/app/components/shared/ImagePopup'

import {
  TEACHING_INTENSIV_GALLERY,
  TEACHING_TYPING_GALLERY,
  TEACHING_PRACTICE_GALLERY,
  TEACHING_STRATEGIC_GALLERY,
} from '@/constants/gallery'
import { GridProductWrapper } from '../uiElements/wrappers/GridWrapper'
import { HeaderCardItem } from '../uiElements/cardItems/HeaderCardItem'
import {
  CardItemHeader,
  CardItemSubHeader,
  Footnote,
} from '../uiElements/Typography'
import { CardItem } from '../uiElements/cardItems/CardItem'
import { ContentColumn } from '../uiElements/wrappers/ContentColumn'
import { MainColumn } from '../uiElements/wrappers/MainColumn'
import { DurationContent } from '../uiElements/cardItems/content/DurationContent'
import { ProductHeader } from '../uiElements/cardItems/content/ProductHeader'
import { TargetClientContent } from '../uiElements/cardItems/content/TargetClientContent'
import { ProgramContent } from '../uiElements/cardItems/content/ProgramContent'
import {
  PricingCard,
  type PricingOption,
} from '../components/shared/PricingCard'
import { Separator } from '../uiElements/Separator'

// ============================================================================
// Courses Configuration
// ============================================================================

const INTENSIV_MODULES: PricingOption[] = [
  {
    label: 'Модуль 1: BASICS',
    description: [
      'Теоретические основы',
      'Модель А',
      '16 психотипов',
      'методы диагностики',
    ],
    price: '12 000 ₽',
    message:
      'Здравствуйте, Элеонора! Интересует "Модуль 1: BASICS". Расскажите подробнее...',
  },
  {
    label: 'Модуль 2: MEDIUM',
    description: [
      'Интертипные отношения',
      'малые группы',
      'признаки Рейнина',
      'методика определения психотипа',
    ],
    price: '12 000 ₽',
    message:
      'Здравствуйте, Элеонора! Интересует "Модуль 2: MEDIUM". Расскажите подробнее...',
  },
]

// ============================================================================
// Main Component
// ============================================================================

const TeachingSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section
      id="learn"
      className="section-odd"
      style={{ scrollMarginTop: 'var(--scroll-margin-top)' }}
    >
      <Separator />
      <MainColumn>
        {/* HEADER */}
        <GridProductWrapper>
          {/* Title Card */}
          <HeaderCardItem>
            <CardItemHeader text={TEACHING_SERVICES.title} />
          </HeaderCardItem>
          {/* Description Card */}
          <HeaderCardItem>
            <CardItemSubHeader text={TEACHING_SERVICES.description} />
          </HeaderCardItem>
        </GridProductWrapper>



        {/* PRODUCTS */}
        {/* Course 1: ИНТЕНСИВ */}
        <GridProductWrapper>
          <ContentColumn>
            <CardItem>
              <ProductHeader text="Курс «ИНТЕНСИВ»" />
            </CardItem>

            {/* Modules */}
            <CardItem>
              <ContentColumn>
                <PricingCard option={INTENSIV_MODULES[0]} />
                <PricingCard option={INTENSIV_MODULES[1]} />
                <PricingCard
                  option={{
                    label: 'Курс «ИНТЕНСИВ» - в записи',
                    price: '15 000 ₽',
                    message:
                      'Здравствуйте, Элеонора! Интересует "Курс ИНТЕНСИВ - в записи". Расскажите подробнее...',
                  }}
                />

                <Footnote text={INTERNATIONAL_PRICING_FOOTNOTE} />
              </ContentColumn>
            </CardItem>
            <ContactCard message="Здравствуйте, Элеонора! Интересует курс ИНТЕНСИВ. Расскажите подробнее о..." />
          </ContentColumn>

          <ContentColumn>
            <CardItem>
              <TargetClientContent text="Руководители, HR-специалисты, психологи, люди, занимающиеся саморазвитием" />
            </CardItem>
            <CardItem>
              <DurationContent
                text="36 академических часов (каждый модуль)"
                note="3 онлайн-тренинга (12ч), 6 тренингов в записи (24ч) + живые встречи, закрытый телеграм-чат группы"
              />
            </CardItem>
            <CardItem>
              <ProgramContent
                items={[
                  {
                    icon: Users,
                    text: 'Сочетание соционики и теории управления людьми',
                  },
                  {
                    icon: UserPlus,
                    text: 'Осознанный подбор членов команды',
                  },
                  {
                    icon: Settings,
                    text: 'Ярко выраженный прикладной характер',
                  },
                  {
                    icon: ShipWheel,
                    text: 'Методики применения в управлении',
                  },
                  {
                    icon: Brain,
                    text: 'Методики определения психотипов с личной практикой',
                  },
                ]}
              />
            </CardItem>
            <GalleryCard
              images={TEACHING_INTENSIV_GALLERY}
              onImageClick={setSelectedImage}
            />
          </ContentColumn>
        </GridProductWrapper>

        {/* Course 3: ТОНКОСТИ ТИПИРОВАНИЯ */}
        <GridProductWrapper>
          <ContentColumn>
            <CardItem>
              <ProductHeader text="Курс «ТОНКОСТИ ТИПИРОВАНИЯ»" />
            </CardItem>

            {/* Pricing */}
            <CardItem>
              <ContentColumn>
                <PricingCard
                  option={{
                    label: 'Модуль 3: TYPE-SPECIAL',
                    price: '18 000 ₽',
                    message:
                      'Здравствуйте, Элеонора! Интересует "Курс «ТОНКОСТИ ТИПИРОВАНИЯ»". Расскажите подробнее...',
                  }}
                />

                <Footnote
                  text={[
                    'Только после прохождения 2-x базовых модулей Курса ИНТЕНСИВА',
                  ]}
                />
                <Footnote text={INTERNATIONAL_PRICING_FOOTNOTE} />
              </ContentColumn>
            </CardItem>
            <ContactCard message="Здравствуйте, Элеонора! Интересует курс ТОНКОСТИ ТИПИРОВАНИЯ. Расскажите подробнее о..." />
          </ContentColumn>

          <ContentColumn>
            <CardItem>
              <DurationContent
                text="32 академических часа"
                note="онлайн, записи + живые встречи, закрытый телеграм-чат группы"
              />
            </CardItem>
            <CardItem>
              <ProgramContent
                headerText="Программа курса:"
                items={[
                  {
                    icon: Video,
                    text: '5 тренингов в записи + 3 вебинара',
                  },
                  {
                    icon: Users,
                    text: 'Развитие навыков типирования',
                  },
                  {
                    icon: Crown,
                    text: 'Авторский метод "Типирование по сказке"',
                  },
                  {
                    icon: UserRoundSearch,
                    text: 'Личная практика с наставником',
                  },
                ]}
              />
            </CardItem>
            <GalleryCard
              images={TEACHING_TYPING_GALLERY}
              onImageClick={setSelectedImage}
            />
          </ContentColumn>
        </GridProductWrapper>

        {/* Course 4: ПРАКТИКА 3.0. */}
        <GridProductWrapper>
          <ContentColumn>
            <CardItem>
              <ProductHeader text="Курс «ПРАКТИКА 3.0.»" />
            </CardItem>

            {/* Pricing */}
            <CardItem>
              <ContentColumn>
                <PricingCard
                  option={{
                    label: 'Модуль 4: TYPE-PRACTICE',
                    description: ['онлайн-школа типирования'],
                    price: '10 000 ₽',
                    message:
                      'Здравствуйте, Элеонора! Интересует "Курс «ПРАКТИКА 3.0.»". Расскажите подробнее...',
                  }}
                />

                <Footnote text={INTERNATIONAL_PRICING_FOOTNOTE} />
              </ContentColumn>
            </CardItem>
            <ContactCard message="Здравствуйте, Элеонора! Интересует курс ПРАКТИКА 3.0. Расскажите подробнее о..." />
          </ContentColumn>

          <ContentColumn>
            <CardItem>
              <ProgramContent
                headerText="Программа курса:"
                items={[
                  {
                    icon: ClipboardList,
                    text: '3 кейса по определению психотипов волонтеров у каждого участника',
                  },
                  {
                    icon: Video,
                    text: '3 онлайн-вебинара с разбором преподавателем',
                  },
                  {
                    icon: MessageSquare,
                    text: 'Чат группы с изучением кейсов одногруппников',
                  },
                  {
                    icon: GraduationCap,
                    text: 'В среднем 25 кейсов для изучения',
                  },
                ]}
              />
            </CardItem>
            <GalleryCard
              images={TEACHING_PRACTICE_GALLERY}
              onImageClick={setSelectedImage}
            />
          </ContentColumn>
        </GridProductWrapper>


        {/* Strategic Session */}
        <GridProductWrapper>
          <ContentColumn>
            <CardItem>
              <ProductHeader text="Стратегическая сессия для управленцев" />
            </CardItem>

            {/* Pricing */}
            <CardItem>
              <ContentColumn>
                <PricingCard
                  option={{
                    label: 'Индивидуальная сессия',
                    price: '50 000 ₽',
                    message:
                      'Здравствуйте, Элеонора! Интересует индивидуальная стратегическая сессия для управленцев. Расскажите подробнее...',
                  }}
                />
                <PricingCard
                  option={{
                    label: 'Групповой коучинг',
                    description: ['детали зависят от количества участников'],
                    price: 'oт 20 000 ₽ / чел.',
                    message:
                      'Здравствуйте, Элеонора! Интересует груповой коучинг для управленцев. Расскажите подробнее...',
                  }}
                />


              </ContentColumn>
            </CardItem>
            {/* Contact Card */}
            <ContactCard message="Здравствуйте, Элеонора! Интересует стратегическая сессия для управленцев. Есть вопрос о..." />
          </ContentColumn>

          <ContentColumn>
            <CardItem>
              <TargetClientContent text="Руководители, топ-менеджеры, владельцы бизнеса, HR-директора" />
            </CardItem>
            <CardItem>
              <DurationContent
                text="4 занятия еженедельно (7-8 академ.часов)"
                note="онлайн/оффлайн, онлайн-сопровождение в течение всего периода"
              />
            </CardItem>
            <CardItem>
              <ProgramContent
                headerText="Цель сессии:"
                items={[
                  {
                    icon: Target,
                    text: 'Проработка осознанности путей развития лидерских качеств',
                  },
                  {
                    icon: Brain,
                    text: 'Развитие с опорой на психотип',
                  },
                  {
                    icon: ShipWheel,
                    text: 'Помощь в решении управленческих кейсов',
                  },
                  {
                    icon: Headset,
                    text: 'Персональное онлайн-сопровождение',
                  },
                ]}
              />
            </CardItem>
            <GalleryCard
              images={TEACHING_STRATEGIC_GALLERY}
              onImageClick={setSelectedImage}
            />
          </ContentColumn>
        </GridProductWrapper>
      </MainColumn>

      {/* Image Popup Modal */}
      <ImagePopup
        imageSrc={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  )
}

export default TeachingSection

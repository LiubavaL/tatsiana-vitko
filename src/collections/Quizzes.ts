import { Choice } from '@/blocks/quizzes/questions/choice/schema'
import { LongText } from '@/blocks/quizzes/questions/longText/schema'
import { ShortText } from '@/blocks/quizzes/questions/shortText/schema'
import { YesNo } from '@/blocks/quizzes/questions/yesNo/schema'
import { CollectionConfig } from 'payload'

export const Quizzes: CollectionConfig = {
  slug: 'quizzes',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'questions',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'type',
          type: 'blocks',
          maxRows: 1,
          blocks: [ShortText, LongText, Choice, YesNo],
        },
      ],
    },
  ],
}

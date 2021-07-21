import { html, TemplateResult } from '@skhemata/skhemata-base';
import '../skhemata-testimonial';

interface ArgTypes {
  configData?: any;
  interval?: number;
  activeTestimonial?: number;
  skhemataTestimonialDotColor?: string;
  skhemataTestimonialDotColorActive?: string;
  skhemataTestimonialTextColor?: string;
  skhemataTestimonialBackgroundColor?: string;
  skhemataTestimonialTitleColor?: string;
}

const sampleConfigData = [
  {
    id: 1,
    name: 'Bill',
    avatar: '',
    comment: '<p>Testimonial 1</p>',
  },
  {
    id: 2,
    name: 'Hank',
    avatar: '',
    comment: '<p>Testimonial 2</p>',
  },
  {
    id: 3,
    name: 'Dale',
    avatar: '',
    comment:
      '<p>Testimonial 3</p>',
  },
  {
    id: 4,
    name: 'John',
    avatar: '',
    comment:
      '<p>Testimonial 4</p>',
  },
];

export default {
  title: 'General/SkhemataTestimonial',
  component: 'skhemata-testimonial',
  argTypes: {
    configData: {
      name: 'config-data',
      control: 'object',
      description: 'Array of testimonial data',
      table: { 
        category: 'HTML Attributes',
        type: 'object'
      }
    },
    interval: {
      control: 'number',
      description:
        'Time in milliseconds before displatying the next testimonial',
      table: { 
        category: 'HTML Attributes',
        type: 'number'
      }
    },
    activeTestimonial: {
      name: 'active-testimonial',
      control: 'number',
      description:
        'The index of the testimonial that should currently be displayed',
      table: { 
        category: 'HTML Attributes',
        type: 'number'
      }
    },
    skhemataTestimonialDotColor: {
      name: '--skhemata-testimonial-dot-color',
      control: 'color',
      defaultValue: 'rgba(136, 136, 136, 0.5)',
      description: 'Color of the carousel dots',
      table: { 
        category: 'CSS Properties',
        type: 'string'
      }
    },
    skhemataTestimonialDotColorActive: {
      name: '--skhemata-testimonial-dot-color-active',
      control: 'color',
      defaultValue: 'rgba(136, 136, 136, 1)',
      description: 'Color of the active carousel dot',
      table: { 
        category: 'CSS Properties',
        type: 'string'
      }
    },
    skhemataTestimonialTextColor: {
      name: '--skhemata-testimonial-text-color',
      control: 'color',
      defaultValue: 'rgb(100, 100, 100)',
      description: 'Color of the text',
      table: { 
        category: 'CSS Properties',
        type: 'string'
      }
    },
    skhemataTestimonialBackgroundColor: {
      name: '--skhemata-testimonial-background-color',
      control: 'color',
      defaultValue: 'rgba(25, 118, 210, 0.05)',
      description: 'Color of the testimonial backgrounds',
      table: { 
        category: 'CSS Properties',
        type: 'string'
      }
    },
    skhemataTestimonialTitleColor: {
      name: '--skhemata-testimonial-title-color',
      control: 'color',
      defaultValue: 'rgb(68,79,86)',
      description: 'Color of the titles',
      table: { 
        category: 'CSS Properties',
        type: 'string'
      }
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

const Template: Story<ArgTypes> = ({
  configData = sampleConfigData,
  interval = 5000,
  activeTestimonial = 0,
  skhemataTestimonialDotColor,
  skhemataTestimonialDotColorActive,
  skhemataTestimonialTextColor,
  skhemataTestimonialBackgroundColor,
  skhemataTestimonialTitleColor,
}: ArgTypes) => html`
  <style>
    body {
      --skhemata-testimonial-dot-color: ${skhemataTestimonialDotColor};
      --skhemata-testimonial-dot-color-active: ${skhemataTestimonialDotColorActive};
      --skhemata-testimonial-text-color: ${skhemataTestimonialTextColor};
      --skhemata-testimonial-background-color: ${skhemataTestimonialBackgroundColor};
      --skhemata-testimonial-title-color: ${skhemataTestimonialTitleColor}
    }
  </style>
  <skhemata-testimonial
    .configData=${configData}
    .carouselInterval=${interval}
    .activeTestimonial=${activeTestimonial}
  >
  </skhemata-testimonial>
`;

export const Example = Template.bind({});
Example.args = {
  configData: sampleConfigData,
  interval: 5000,
  activeTestimonial: 0,
};
Example.parameters = {
  docs: {
    source: {
      code: `
<skhemata-testimonial
  config-data="${JSON.stringify(Example.args.configData, null, 2).replace(/"/g, '\\"')}"
  posts-per-page="${Example.args.interval}"
>
</skhemata-testimonial>
      `,
    },
  },
}

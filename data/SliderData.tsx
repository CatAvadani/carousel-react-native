import { ImageSourcePropType } from 'react-native';

export type ImageSliderType = {
  title: string;
  image: ImageSourcePropType;
  description: string;
};

export const ImageSlider = [
  {
    title: 'Landscape Mountain',
    image: {
      uri: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
  },
  {
    title: 'Island River',
    image: {
      uri: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
  },
  {
    title: 'Sunset Beach',
    image: {
      uri: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget',
  },
  {
    title: 'Blue Sea',
    image: {
      uri: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNofGVufDB8fDB8fHww',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
  },
  {
    title: 'Green Forest',
    image: {
      uri: 'https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
  },
];

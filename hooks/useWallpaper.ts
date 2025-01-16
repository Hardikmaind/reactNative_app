

//* THIS IS THE OLD INTERFACE WHICH I USED BEFORE
// export interface Wallpaper {
//   id: number;
//   url: string;
//   title: string;
// }


/* 
export function useWallpaper(): Wallpaper[] {
  return [
    {
      id: 1,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper",
    },
    {
      id: 2,
      url: "https://ideogram.ai/assets/image/lossless/response/pgdbgVJXRfq9MqIoODtpNw",
      title: "Wallpaper 2",
    },
    {
      id: 3,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/VoEXoLnkQYWbNL18xXlXjw",
      title: "Wallpaper 2",
    },
    {
      id: 4,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/78ldoir0SFihnkhjRjqjbA",
      title: "Wallpaper 2",
    },
    {
      id: 5,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 6,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/78ldoir0SFihnkhjRjqjbA",
      title: "Wallpaper 2",
    },
    {
      id: 7,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 8,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/78ldoir0SFihnkhjRjqjbA",
      title: "Wallpaper 2",
    },
    {
      id: 9,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 10,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/78ldoir0SFihnkhjRjqjbA",
      title: "Wallpaper 2",
    },
    {
      id: 11,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/VoEXoLnkQYWbNL18xXlXjw",
      title: "Wallpaper 2",
    },
    {
      id: 12,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/78ldoir0SFihnkhjRjqjbA",
      title: "Wallpaper 2",
    },
    {
      id: 13,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 14,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 15,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/VoEXoLnkQYWbNL18xXlXjw",
      title: "Wallpaper 2",
    },
    {
      id: 16,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 17,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 18,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/VoEXoLnkQYWbNL18xXlXjw",
      title: "Wallpaper 2",
    },
    {
      id: 19,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 20,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 21,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 22,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 23,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 24,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 25,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 26,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 27,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 28,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
  ];
}
*/




//! new hooks and interfaces

//? METHOD-1. I can use the interface like below ..to use the liked,suggested,library,etc like below by writing ? like optional

/*
export interface Wallpaper {
  id: number;
  url: string;
  title: string;
  liked?: boolean;
  suggested?: boolean;
  library?: boolean;
}
export function useWallpaper(): Wallpaper[] {
  return [
    {
      id: 1,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper",
    },
    {
      id: 2,
      url: "https://ideogram.ai/assets/image/lossless/response/pgdbgVJXRfq9MqIoODtpNw",
      title: "Wallpaper 2",
    },
    {
      id: 3,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/VoEXoLnkQYWbNL18xXlXjw",
      title: "Wallpaper 2",
    },
    {
      id: 4,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/78ldoir0SFihnkhjRjqjbA",
      title: "Wallpaper 2",
    },
    {
      id: 5,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 6,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/78ldoir0SFihnkhjRjqjbA",
      title: "Wallpaper 2",
    },
    {
      id: 7,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 8,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/78ldoir0SFihnkhjRjqjbA",
      title: "Wallpaper 2",
    },
    {
      id: 9,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 10,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/78ldoir0SFihnkhjRjqjbA",
      title: "Wallpaper 2",
    },
    {
      id: 11,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/VoEXoLnkQYWbNL18xXlXjw",
      title: "Wallpaper 2",
    },
    {
      id: 12,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/78ldoir0SFihnkhjRjqjbA",
      title: "Wallpaper 2",
    },
    {
      id: 13,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 14,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 15,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/VoEXoLnkQYWbNL18xXlXjw",
      title: "Wallpaper 2",
    },
    {
      id: 16,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 17,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 18,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/VoEXoLnkQYWbNL18xXlXjw",
      title: "Wallpaper 2",
    },
    {
      id: 19,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 20,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 21,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 22,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 23,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 24,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 25,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 26,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 27,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
    {
      id: 28,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
    },
  ];
}

*/

//? METHOD-2. I can also extend the above interface and use the extended interface like below
export interface Wallpaper {
  id: number;
  url: string;
  title: string;
}
interface Fullwallpaper extends Wallpaper {
  liked: boolean;
  suggested: boolean;
  library: boolean;
}
export function useWallpaper(): Fullwallpaper[] {
  return [
    {
      id: 1,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper",
      liked: true,
      suggested: false,
      library: false,
    },
    {
      id: 2,
      url: "https://ideogram.ai/assets/image/lossless/response/pgdbgVJXRfq9MqIoODtpNw",
      title: "Wallpaper 2",
      liked: false,
      suggested: true,
      library: false,
    },
    {
      id: 3,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/VoEXoLnkQYWbNL18xXlXjw",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 4,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/78ldoir0SFihnkhjRjqjbA",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: false,
    },
    {
      id: 5,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
      liked: false,
      suggested: true,
      library: false,

    },
    {
      id: 6,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/78ldoir0SFihnkhjRjqjbA",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 7,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: false,
    },
    {
      id: 8,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/78ldoir0SFihnkhjRjqjbA",
      title: "Wallpaper 2",
      liked: false,
      suggested: true,
      library: false,
    },
    {
      id: 9,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 10,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/78ldoir0SFihnkhjRjqjbA",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 11,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/VoEXoLnkQYWbNL18xXlXjw",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 12,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/78ldoir0SFihnkhjRjqjbA",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 13,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 14,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 15,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/VoEXoLnkQYWbNL18xXlXjw",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 16,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 17,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 18,
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/VoEXoLnkQYWbNL18xXlXjw",
      title: "Wallpaper 2",

      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 19,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 20,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 21,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 22,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 23,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 24,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 25,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 26,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 27,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
    {
      id: 28,
      url: "https://ideogram.ai/assets/image/lossless/response/4rPreaS7TV-Cx2gF2Eij_A",
      title: "Wallpaper 2",
      liked: false,
      suggested: false,
      library: true,
    },
  ];
}

export function useSuggestedWallpaper(): Fullwallpaper[] {
  return useWallpaper().filter((wallpaper) => wallpaper.suggested);
}
export function useLikedWallpaper(): Fullwallpaper[] {
  return useWallpaper().filter((wallpaper) => wallpaper.liked);
}
export function useLibraryWallpaper(): Fullwallpaper[] {
  return useWallpaper().filter((wallpaper) => wallpaper.library);
}
export interface ProductModel {
  id: number,
  artist: string,
  album: Album
}

export interface Album {
  name: string,
  releaseDate: string,
  coverImage: string,
  tracks: Track[]
}

export interface Track {
  trackNumber: number,
  trackName: string,
  trackLength: string,
  trackPrice: number
}

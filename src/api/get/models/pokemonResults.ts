export interface PokemonData{
    count: number
    next: string
    previous: string | null
    results: PokemonResults[]
}

interface PokemonResults {
    name: string
    abilities: any[]
    url: string
}

export interface PokemonStats {
    abilities: any[]
    // base_experience: number
    // forms: any[]
    // game_indices: any[]
    height: number
    // held_items: any[]
    id: number
    // is_default: boolean
    // location_area_encounters: string
    // moves: any[]
    name: string
    // order: number
    // past_abilities: any[]
    // past_types: any[]
    // species: Species
    // sprites: Sprites
    // stats: any[]
    types: Type[]
    // weight: number
  }
  
//   interface Species {
//     name: string
//     url: string
//   }
  
//   interface Sprites {}
  
  interface Type {
    slot: number
    type: Type2
  }
  
  interface Type2 {
    name: string
    url: string
  }
  
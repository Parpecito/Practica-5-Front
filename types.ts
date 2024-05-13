export type films={
    _id:string,
    brand:string,
    name: string,
    iso: number,
    formatThirtyFive:boolean,
    formatOneTwenty:boolean,
    color:boolean,
    process:string,
    staticImageUrl:string,
    description: string,
    customDescription: string[]
    keyFeatures:keyFeatures[],
    dataAdded: string,
    __v:number


}

export type keyFeatures={
    _id: string,
    feature: string
}
export type filmsResponse={
    film: films[]
}
export type filtros={
    marcas:string[],
    ISOS:number[]
}

export type Proyecto={
    nombre: string,
    peliculas: films[]
}
export class ArtistaIQuadre {
    titolQuadre!: string;
    imatge!: string;
    nomArtista!: string;
    birthArtista!: string;
    deathArtista!: string;

    constructor(titolQuadre: string, imatge: string, nomArtista: string, birthArtista: string, deathArtista: string) {
        this.titolQuadre = titolQuadre;
        this.imatge = imatge;
        this.nomArtista = nomArtista;
        this.birthArtista = birthArtista;
        this.deathArtista = deathArtista;
    }
}
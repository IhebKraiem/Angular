import { Component } from '@angular/core';
import { article } from '../models/article';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent {
  titre: string = 'Les articles du jour';

  nombreArticles!:any;

  listeArticles: article[] = [
    {
      titre: 'Comment utiliser Angular',
      contenu: 'Angular est un framework JavaScript pour la création d\'applications web.',
      auteur: 'John Doe',
      date: '2022-04-12',
      categorie: 'Travail'
    },
    {
      titre: '10 conseils pour améliorer votre productivité',
      contenu: 'Voici quelques astuces pour augmenter votre productivité et mieux gérer votre temps.',
      auteur: 'Jane Smith',
      date: '2022-04-13',
      categorie: 'Education'
    },
    {
      titre: 'Nouvelles fonctionnalités de TypeScript 4.5',
      contenu: 'TypeScript 4.5 apporte de nombreuses améliorations et nouvelles fonctionnalités pour les développeurs.',
      auteur: 'John Doe',
      date: '2022-04-14',
      categorie: 'Développement web'
    }
  ];

  incrementNombreArticles() {
    this.nombreArticles++;
    console.log(this.nombreArticles);
  }
}

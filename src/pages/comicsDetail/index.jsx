import React from 'react';
import {Characters, Header, Footer, LatestRelease, Calendar} from '../../components'
import SpidermanFly from "../../images/spider-man-tome-1-un-jour-nouveau-deluxe-vf.jpg";
import Avengers from "../../images/avengers-universe-6-2021.jpg";
import Guardians from "../../images/news_illustre_1611250232_529.jpg";
import Hulk from "../../images/Couv_14119.jpg";

export default function (){
  const indexItem = [
    {
      id: 1,
      textRating: '4.0',
      textPrice: '$17.00',
      textDescr: 'Історія про кмітливого супергероя Людину-Павука',
      textComicsName: 'Spiderman',
      textCollectionName: 'Marvel Comics',
      posterImage: SpidermanFly,
      link: '/detail',
      textButton: 'See details',
    },
    {
      id: 2,
      textRating: '4.5',
      textPrice: '$21.00',
      textDescr: 'Історія про групу хороших хлопців. Історія про групу хороших хлопців. Історія про групу хороших хлопців. Історія про групу хороших хлопців.',
      textComicsName: 'Avengers',
      textCollectionName: 'Marvel Comics',
      posterImage: Avengers,
      link: '/detail',
      textButton: 'See details',
    },
    {
      id: 3,
      textRating: '2.1',
      textPrice: '$15.00',
      textDescr: 'Історія про групу поганих хлопців',
      textComicsName: 'Guardians',
      textCollectionName: 'Marvel Comics',
      posterImage: Guardians,
      link: '/detail',
      textButton: 'See details',
    },
    {
      id: 4,
      textRating: '3.5',
      textPrice: '$16.00',
      textDescr: 'Історія про сильного Халка',
      textComicsName: 'Hulk',
      textCollectionName: 'Marvel Comics',
      posterImage: Hulk,
      link: '/detail',
      textButton: 'See details',
    },
  ]
  const indexItem2 = [
    {
      id: 4,
      textRating: '3.5',
      textPrice: '$16.00',
      textDescr: 'Історія про сильного Халка',
      textComicsName: 'Hulk',
      textCollectionName: 'Marvel Comics',
      posterImage: Hulk,
      link: '/detail',
      textButton: 'See details',
    },
    {
      id: 3,
      textRating: '2.1',
      textPrice: '$15.00',
      textDescr: 'Історія про групу поганих хлопців',
      textComicsName: 'Guardians',
      textCollectionName: 'Marvel Comics',
      posterImage: Guardians,
      link: '/detail',
      textButton: 'See details',
    },
    {
      id: 2,
      textRating: '4.5',
      textPrice: '$21.00',
      textDescr: 'Історія про групу хороших хлопців. Історія про групу хороших хлопців. Історія про групу хороших хлопців. Історія про групу хороших хлопців.',
      textComicsName: 'Avengers',
      textCollectionName: 'Marvel Comics',
      posterImage: Avengers,
      link: '/detail',
      textButton: 'See details',
    },
    {
      id: 1,
      textRating: '4.0',
      textPrice: '$17.00',
      textDescr: 'Історія про кмітливого супергероя Людину-Павука',
      textComicsName: 'Spiderman',
      textCollectionName: 'Marvel Comics',
      posterImage: SpidermanFly,
      link: '/detail',
      textButton: 'See details',
    },
  ]
  return (
    <div>
      <Header authorized={false}/>
      <LatestRelease releases={indexItem} releasesTitle={`MORE COMICS`}/>
      <LatestRelease releases={indexItem2} releasesTitle = {'MORE 100% MARVELS'}/>
      <Footer/>
    </div>
  )
}

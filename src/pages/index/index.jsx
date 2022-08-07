import React, {useState} from 'react';
import {Characters, Header, Footer, LatestRelease, Calendar,Hero} from '../../components'
import SpidermanFly from '../../images/spider-man-tome-1-un-jour-nouveau-deluxe-vf.jpg'
import Avengers from '../../images/avengers-universe-6-2021.jpg'
import Guardians from '../../images/news_illustre_1611250232_529.jpg'
import Hulk from '../../images/Couv_14119.jpg'
import Spiderman from '../../images/Spiderman.png';
import Wolverine from '../../images/wolverine.png';
import IronMan from '../../images/Iron-man.png';
import CaptainAmerica from '../../images/CaptainAmerica.png';
import CaptainMarvel from '../../images/CaptainMarvel.png';


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
  const indexCharacter = [
    {
      posterImage: Spiderman,
      textName: 'Spiderman',
      link:'/detail',
    },
    {
      posterImage: Wolverine,
      textName: 'Wolverine',
      link:'/detail',
    },
    {
      posterImage: IronMan,
      textName: 'Iron-man',
      link:'/detail',
    },
    {
      posterImage: CaptainAmerica,
      textName: 'Captain America',
      link:'/detail',
    },
    {
      posterImage: CaptainMarvel,
      textName: 'Captain Marvel',
      link:'/detail',
    },
  ]
  const indexCalendar = [
    {
      id: 1,
      textMonth: 'February 2022',
      posterImage: SpidermanFly,
      link: '/detail',
      modifiers: 'red',
    },
    {
      id: 2,
      textMonth: 'March 2022',
      posterImage: Guardians,
      link: '/detail',
      modifiers: 'blue',
    },
    {
      id: 3,
      textMonth: 'April 2022',
      posterImage: Hulk,
      link: '/detail',
      modifiers: 'green',
    },
  ]
  return (
    <div>
      <Header/>
      <Hero releases={indexItem}/>
      <LatestRelease releases={indexItem} releasesTitle={'LATEST RELEASE'}/>
      <Calendar calendar={indexCalendar}/>
      <Characters characters={indexCharacter} charactersTitle = {'CHARACTERS'}/>
      <Footer/>
    </div>
  )
}

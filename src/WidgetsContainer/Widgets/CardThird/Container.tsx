import { FC, useState } from 'react'
import { CardAddOneMore } from './Cards/CardAddOneMore/CardAddOneMore'
import { CardText } from './Cards/CardText/CardText'
import style from './Container.module.css'

export const Container: FC = () => {

    const [cards, setCards] = useState([{id:1, text:'0'}])

    const addOneCard = () => {            
        if(cards.length < 23) {
            setCards([...cards, {id: Date.now(), text: cards.length ? String(+cards[cards.length-1].text+1) : '0'}])
        }
    }

    const removeOneCard = (e: any) => {
        setCards(cards.filter(c => c.id !== +e.target.parentNode.id))
    }

    return (
        <div className={style.gridContainer}>
            {cards.map((card, index) => {
                return <CardText id={card.id} text={card.text} onClickRemove={removeOneCard} key={card.id}/>
            }
            )}
            <CardAddOneMore onClickAdd={addOneCard} />
        </div>
    )
  
}

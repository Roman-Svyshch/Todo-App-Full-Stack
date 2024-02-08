
export default function SecondComponent(){
  return(
    <h1 className='Second Component'>Its a second Component</h1>
  )
}

export function FifthComponent(){
  return(
    <div><h1 className='FifthComponent'>Its info about person</h1>
          <p>{person.name},{person.address}</p>
          <p>{person.profiles[0]}</p>
    </div>
    
  )
}

const person = {
  name:'Roman Svyshch',
  address :'Bohuna 9',
  profiles :['instagram ',' faceBook','twitter']
}
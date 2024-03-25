import 'tachyons'

const locations = ['Street', 'The Hill', 'The Neighborhood', 'the other ones']
function LocationSelect() {

  return (
    <>
      {locations.map((item,) => {
        return  (
          <button key={index}>{item}</button>
        )
      })}
    </>
  )
}

export default LocationSelect

const { React } = require ('react')
const  { ActionProps } =  require('adminjs')

const ShowRecord = (props) => {
  const { record } = props

  return (
    <div>
      {JSON.stringify(record)}
    </div>
  )
}

// export default ShowRecord
module.exports = {
  ShowRecord
}
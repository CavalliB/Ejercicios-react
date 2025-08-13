const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  const NotificationStyle = {
    color: 'green',
  background: 'lightgrey',
  fontsize: 20,
  borderstyle: 'solid',
  borderradius: 5,
  padding: 10,
bottom: 10
  }
  

  return (
    <div style={NotificationStyle}>
      {message}
    </div>
  )
}
export default Notification

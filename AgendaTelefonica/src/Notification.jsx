const Notification = ({ message, stateNotify }) => {
  if (message === null) {
    return null;
  }
  if (stateNotify === 'good') {
    const NotificationStyle = {
      color: "green",
      background: "lightgrey",
      fontsize: 20,
      borderstyle: "solid",
      borderradius: 5,
      padding: 10,
      bottom: 10,
    };
    return <div style={NotificationStyle}>{message}</div>;
  }
  if (stateNotify === 'bad') {
    const NotificationStyle = {
      color: "red",
      background: "lightgrey",
      fontsize: 20,
      borderstyle: "solid",
      borderradius: 5,
      padding: 10,
      bottom: 10,
      
    };
    return <div style={NotificationStyle}>{message}</div>;
  }

  
};
export default Notification;

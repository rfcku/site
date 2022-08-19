
import { Card, Grid, Text, Row, User, Button, Image } from "@nextui-org/react";

const AlertTemplate = ({ style, options, message, close }) => (
    <Card style={style}>
      <Text>{options.type === 'info' && '!'}</Text>
      <Text>{options.type === 'success' && ':)'}</Text>
      <Text>{options.type === 'error' && ':('}</Text>
      <Text>{message}</Text>
      <Button onClick={close}>X</Button>
    </Card>
  )
  export default AlertTemplate
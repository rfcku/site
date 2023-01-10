
import Alert from '@mui/material/Alert';
import { Text } from "@nextui-org/react";
import {AiFillInfoCircle, AiFillCheckCircle} from 'react-icons/ai';
import { MdOutlineError } from 'react-icons/md';

const icon = {
  info: AiFillInfoCircle,
  success: AiFillCheckCircle,
  error: MdOutlineError,
};

const AlertTemplate = ({ style, options, message, close }) => {
  const { type } = options;

  const Icon = icon[type];
  return (
    <div>
      <Alert icon={<Icon />} severity={type}>
        <Text>{message}</Text>
      </Alert>
    </div>
  )
}
  export default AlertTemplate
  // <Card style={style}>
  //   <Text>{options.type === 'info' && '!'}</Text>
  //   <Text>{options.type === 'success' && ':)'}</Text>
  //   <Text>{options.type === 'error' && ':('}</Text>
  //   <Button onClick={close}>X</Button>
  // </Card>
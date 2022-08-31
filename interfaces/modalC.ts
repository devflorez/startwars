import { Button } from "@nextui-org/react";
export interface IModalProps {
  children: JSX.Element | JSX.Element[];
  button?: JSX.Element;
  visible: boolean;
  closeHandler: () => void;
  title: string;
}

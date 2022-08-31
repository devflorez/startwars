import { useState } from "react";

export default function useModal() {
  const [visibleModal, setVisibleModal] = useState(false);
  const onChangeVisibility = () => setVisibleModal(!visibleModal);
  return { visibleModal, onChangeVisibility };
}

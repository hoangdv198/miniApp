import React, {useEffect, useRef} from 'react';
import {UIManager, findNodeHandle, PixelRatio} from 'react-native';
import {MyViewManager} from '../../nativeModule/ViewManagerCustom';

const createFragment = viewId =>
  UIManager.dispatchViewManagerCommand(
    viewId,
    // we are calling the 'create' command
    UIManager.MyViewManager.Commands.create.toString(),
    [viewId],
  );

const App2 = () => {
  const ref = useRef(null);

  useEffect(() => {
    const viewId = findNodeHandle(ref.current);
    createFragment(viewId);
  }, []);

  return (
    <MyViewManager
      style={{
        // converts dpi to px, provide desired height
        height: PixelRatio.getPixelSizeForLayoutSize(200),
        // converts dpi to px, provide desired width
        width: PixelRatio.getPixelSizeForLayoutSize(200),
      }}
      ref={ref}
    />
  );
};
export default App2;
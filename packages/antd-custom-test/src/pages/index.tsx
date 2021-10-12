// import styles from './index.less';
// import { SwButton } from "antd-custom-zerotohero";
import { SwButton } from "antd-custom-zerotohero";
import { Button } from "antd";

// import "antd-custom-zerotohero/dist/index.css";
// import "antd/dist/antd.css";
// import "antd-custom-zerotohero/dist/less/antd-vars.less";

import 'antd/lib/style/themes/default.less';
// import 'antd-custom-zerotohero/dist/less/antd-vars.less'; // 用于覆盖上面定义的变量
import 'antd/dist/antd.less'; // 引入官方提供的 less 样式入口文件
import styles from "./index.less";

export default function IndexPage() {
  return (
    <div>
      <SwButton type="dashed" size="small" >
        hello
      </SwButton>
      <Button type="primary" size="middle">
        hello jack
      </Button>
    </div>
  );
}

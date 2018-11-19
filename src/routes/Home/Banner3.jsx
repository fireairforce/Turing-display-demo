import React from 'react';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';
import PropTypes from 'prop-types';
import 'rc-texty/assets/index.css';

class Banner extends React.PureComponent {
  static contextTypes = {
    router: PropTypes.object
}
  handleDetail = () =>{
    this.context.router.history.push('/detail')
  }
  handleSubmit = () =>{
     window.location.href='http://turing.acmclub.cn/home#/'
  }

  render() {
    const { ...currentProps } = this.props;
    const { dataSource } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    const children = dataSource.textWrapper.children.map((item) => {
      const { name, texty, ...$item } = item;
      if (name === 'button1') {
        return (
          <Button type="primary" key={name} {...$item} onClick={this.handleDetail}>
            {item.children}
          </Button>
        );
      }
      else if (name === 'button2') {
        return (
          <Button type="primary" key={name} {...$item} onClick={this.handleSubmit}>
            {item.children}
          </Button>
        );
      }
      return (
        <div key={name} {...$item}>
          {texty ? (
            <Texty type="mask-bottom">{item.children}</Texty>
          ) : (
            item.children
          )}
        </div>
      );
    });
    return (
      <div {...currentProps} {...dataSource.wrapper}>
        <QueueAnim
          key="QueueAnim"
          type={['bottom', 'top']}
          delay={200}
          {...dataSource.textWrapper}
        >
          {children}
        </QueueAnim>
      </div>
    );
  }
}
export default Banner;

import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h4 className="m-0">
        Movish Technology
        {/* <Link to="/">
          <Image
            src={require('./../../../assets/images/logo.svg')}
            alt="Open"
            width={32}
            height={32} />
        </Link> */}
      </h4>
    </div>
  );
}

export default Logo;
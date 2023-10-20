import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import avatar from '../../../asset/image/avatar.jpg';
import facebook from '../../../asset/image/facebook-logo.svg';
import git from '../../../asset/image/github-logo.svg';
import insta from '../../../asset/image/instagram-logo.svg';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('info')}>
            <img src={avatar} className={cx('avatar')}></img>
            <p className={cx('name')}>Pham Trung Hieu</p>
            <div className={cx('logo')}>
                <a href="https://www.facebook.com/hieu.phamtrung.2003">
                    <img src={facebook}></img>
                </a>
                <a href="https://github.com/hieuphamtrung2003">
                    <img src={git}></img>
                </a>
                <img src={insta}></img>
            </div>
        </div>
    );
}

export default Contact;

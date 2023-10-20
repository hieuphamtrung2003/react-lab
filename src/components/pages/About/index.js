import styles from './About.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function About() {
    return (
        <div>
            <p className={cx('para')}>
                Bạn đang muốn xem phim miễn phí trên mạng nhưng không biết trang web nào uy tín và chất lượng? Bạn đang băn khoăn về
                việc tìm kiếm phim theo sở thích và nhu cầu của mình? Bạn đang lo lắng về việc xem phim có an toàn cho thiết bị của
                mình hay không? Nếu bạn đang gặp những vấn đề trên, hãy để [Phim Hay] giúp bạn giải quyết.<br></br>
                [Phim Hay] là một trang web chuyên cung cấp các bộ phim miễn phí cho người dùng. Bạn có thể xem phim trực tuyến hoặc
                tải xuống để xem sau mà không cần đăng ký hay thanh toán bất kỳ khoản phí nào. [Phim Hay] có hàng ngàn bộ phim từ nhiều
                thể loại khác nhau, từ hành động, kinh dị, hài hước, tình cảm, đến hoạt hình, khoa học viễn tưởng, và nhiều hơn nữa. Bạn
                sẽ không bao giờ cảm thấy nhàm chán khi xem phim trên [Phim Hay]..<br></br>
                [Phim Hay] cập nhật liên tục các bộ phim mới nhất và hot nhất trên thị trường. Bạn sẽ không bỏ lỡ bất kỳ bộ phim nào mà
                bạn yêu thích. Bạn cũng có thể tìm kiếm phim theo tên, diễn viên, đạo diễn, quốc gia, hoặc năm sản xuất. [Phim Hay] có một
                hệ thống tìm kiếm thông minh và dễ sử dụng, giúp bạn tìm ra được bộ phim mà bạn mong muốn chỉ trong vài giây.<br></br>
                [Phim Hay] là một trang web an toàn, uy tín, và dễ sử dụng. Bạn không cần phải lo lắng về việc xem phim có gây hại cho thiết 
                bị của mình hay không. [Phim Hay] luôn kiểm tra và loại bỏ các quảng cáo phiền phức và mã độc. Bạn cũng có thể yên tâm về chất
                 lượng của các bộ phim trên [Phim Hay]. [Phim Hay] luôn cung cấp các bộ phim với độ phân giải cao và âm thanh sống động.<br></br>
            </p>
        </div>
    );
}

export default About;

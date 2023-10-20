import styles from './News.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function News() {
    return (
        <div>
            <h1>'The Nun 2' kém đột phá dù nhiều chiêu hù dọa</h1>
            <p>
                Kịch bản The Nun 2 được xây dựng theo môtíp điều tra, song kịch bản còn dài dòng so với phần một. Sau thảm kịch đầu phim,
                tác phẩm được triển khai theo lối kể song tuyến. Câu chuyện chính xoay quanh Irene - cô gái đang sống ẩn dật tại tu viện
                vì quá khứ đau thương. Cùng lúc, phim kể về nhân vật Frenchie với cuộc sống làm bảo vệ cho một trường nội trú nữ, nơi quỷ
                dữ đang dần trỗi dậy. Do có nhiều tình tiết cần cài cắm, nhịp phim bị chùng, lê thê ở nhiều phân đoạn.
            </p>
            <img
                className={cx('img')}
                src="https://assets-prd.ignimgs.com/2023/09/06/nun-01591r-1535062311103-1694032679453.jpg"
            ></img>
            <p>
                Mở màn, đạo diễn bước đầu xây dựng thành công không khí kinh dị khi giới thiệu sự trở lại của Valak. Sức mạnh ác quỷ dần hiện
                diện với loạt cái chết bí ẩn khắp châu Âu, báo hiệu quyền lực ngày càng lớn của thực thể này.
            </p>
            <p>
                Dù vậy, khi chân tướng Valak lộ rõ, tác phẩm đánh mất sức hút. Quá trình tìm hiểu thân thế Valak diễn ra qua loa, nhân vật chính gặp
                nhiều thuận lợi trong cuộc chiến với cái ác. Ở hồi ba, phân đoạn Irene truy tìm thánh tích - phương thức được cho có thể diệt trừ ác
                quỷ - có nhiều điểm kém logic, khi địa điểm chôn cổ vật được tìm thấy nhanh chóng.
            </p>
            <p>
                Xuyên suốt phim, sức mạnh của phe phản diện không ổn định. Valak được giới thiệu có nhiều quyền năng như sai khiến các thây ma, quỷ dữ, chiếm
                đoạt linh hồn người sống. Dù vậy, nhóm nhân vật chính chế ngự đám tay sai này khá dễ dàng. Ở hồi cuối, khi Valak đạt được sức mạnh tối thượng,
                phim chọn cách gỡ nút thắt có phần thiếu thuyết phục, theo lối mòn của nhiều tác phẩm cùng thể loại.
            </p>
            <p>
                Đạo diễn Michael Chaves đầu tư bối cảnh, cài cắm nhiều chiêu jump-scare (hù dọa đột ngột) để tạo sức hút cho phim. Ở một phân đoạn, phim thiết lập
                được không khí căng thẳng khi bóng hình Valak dần hiện rõ trên quầy tạp chí rồi bất thình lình lao thẳng vào mặt nhân vật chính.
            </p>
            <p>
                Không gian huyền bí của kiến trúc Gothic được tận dụng ở những khu tu viện xưa cũ, nhà nguyện kín. Những bậc cầu thang cổ hình xoắn ốc góp phần tạo
                không khí căng thẳng trong các phân đoạn nhân vật bị ác quỷ truy lùng. Có lúc, máy quay tập trung vào các pho tượng cổ, biểu tượng quỷ dữ trên bức
                bích họa, gợi cảm giác về sự nguy hiểm, rình rập.
            </p>
            <img
                className={cx('img')}
                src="https://static01.nyt.com/images/2023/09/09/multimedia/08nun-review-jvmq/08nun-review-jvmq-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
            ></img>
            <p>
                The Nun 2 bị giới phê bình chấm ở mức trung bình, với 48% số điểm trên chuyên trang Rotten Tomatoes. Cây bút Mark Kennedy của trang Associated Press
                đánh giá khâu đạo diễn lẫn biên kịch khó níu chân khán giả bằng một câu chuyện quanh co, thiếu điểm nhấn. Jake Wilson của tờ The Sydney Morning Herald
                cho rằng những cú hù dọa trong phim không quá ghê rợn, cách xây dựng cao trào có phần máy móc.
            </p>
            <p>
                Tác phẩm thành công về mặt thương mại khi thu về 93 triệu USD trên toàn cầu sau một tuần ra mắt, dù kinh phí gần 39 triệu USD. Tại Việt Nam, phim hiện đạt doanh
                thu 41 tỷ đồng và dẫn đầu phòng vé.
            </p>
        </div>
    );
}

export default News;

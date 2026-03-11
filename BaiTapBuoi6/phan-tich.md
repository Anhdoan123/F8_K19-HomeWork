<!-- 
Câu 1: Selector nào có độ ưu tiên cao nhất trong CSS?
Id selector có độ ưu tiên cao nhất trong css

Câu 2: Nếu một phần tử HTML có cả h1, .title, và #main cùng set color — selector nào thắng? Tại sao?
#main sẽ thắng vì nó là id selector có độ ưu tiên selector cao nhất

Câu 3: Nếu bạn thêm style="color: pink" trực tiếp vào phần tử ở Câu 2, kết quả thay đổi như thế nào?
inline css (style="color: pink") sẽ override màu của #main vì inline css có độ ưu tiên selector cao hơn 

Câu 4: Tại sao theme.css có thể override style từ base.css? Điều kiện để override thành công là gì?
theme.css có thể override style từ base.css khi thỏa 2 điều kiện:có cùng độ ưu tiên selector và theme.css đươc load sau base.css

Câu 5: Trong project của bạn, có hai phần tử đều dùng class .title nhưng hiển thị màu khác nhau. Giải thích tại sao.
h1 và h2 đều dùng .title nhưng không có màu giống nhau vì:
    Đối với thẻ h1 nó được áp dụng nhiều selector như tag(h1), class(.title), id(#main) nhưng trong css id selector có độ ưu tiên cao hơn nên style của id sẽ được áp dụng cho h1
    Đối với thẻ h2 chỉ dùng .title, ở đây base.css và theme.css đều gọi đến selector này nhưng theme.css đã override style của base.css vì nó được load sau

Câu 6: Phần tử nào trong project của bạn có CSS phức tạp nhất? Liệt kê các selector tác động lên nó và giải thích selector nào thắng cuối cùng.
    phần tử h2 trong orders có css phức tạp nhất vì nó có cả tagname, class, id, internal css, external css, inline css
    selector có độ ưu tiên cao nhất là id selector nhưng trong trường hợp này có gặp phải inline css nên màu của inline css đã override màu của id selector
-->
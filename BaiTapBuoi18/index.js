// Câu 1
const student = {
    name: 'hoang',
    parent: {
        name: 'bo hoang'
    }
}

const mentor = {...student}

mentor.name = 'bang'
mentor.parent.name = 'bo bang'

console.log(student)
console.log(mentor)

/*
student.name không bị đổi
student.parent.name bị đổi

Giải thích: vì khi dùng {...student} là coppy nông nó chỉ coppy giá trị (string, number,..) nên student.name không bị đổi
còn đối với object con bên trong nó coppy dịa chỉ
nên khi này mentor.parent.name và student.parent.name cùng địa chỉ nên khi sửa giá trị trên địa chỉ này cả 2 sẽ cùng thay đổi
*/

// Câu 2
const student = {
    name: 'hoang',
    parent: {
        name: 'bo hoang'
    }
}

const mentor = JSON.parse(JSON.stringify(student))

mentor.parent.name = 'bo bang'

console.log(student)
console.log(mentor)


/*
student.parent.name không bị ảnh hưởng
nó khác  spread (const mentor = { ...student }) vì JSON.parse(JSON.stringify(student)) tạo một object mới hoàn toàn (coppy sâu)
Do đó mentor.parent và student.parent là 2 object khác nhau,
nên khi thay đổi mentor.parent.name sẽ không ảnh hưởng đến student.
 */


// Câu 3
const students = [
    {name: 'a'},
    {name: 'b'}
]

const newStudents = [...students]

newStudents[0].name = 'z'

console.log(students)
console.log(newStudents)

/*
Mảng có bị thay đổi

Phần tử bên trong bị thay đổi
 */


// Câu 4
const user = {
    name: 'hoang',
    address: {
        city: 'HN',
        location: {
            lat: 123
        }
    }
}

const newUser = {...user}

newUser.address.location.lat = 999

console.log(user.address.location.lat)

/*
kết quả là 999
vì const newUser = {...user} là coppy nông nên đối với object bên trong nó coppy trực tiếp địa chỉ nên user.address vs newUser.address đang chung địa chỉ khi sửa ở newUser thì user cũng sửa theo
 */
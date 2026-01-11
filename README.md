roje Vite kullanılarak oluşturulmalıdır.
Görev kodunu çalıştırırken konsolda hata veya uyarı olmamalıdır.
Her bileşen için src/components klasöründe, React bileşeninin JSX dosyasını ve stil dosyasını içeren ayrı bir klasör oluşturulmalıdır. Klasör adı, bileşen dosyasının adı (uzantısı .jsx) ve stil dosyasının adı (öncesinde .module.css) aynı olmalı ve görevlerde belirtilen adlara uyumlu gelmelidir (varsa).
Bileşenlerin dışa aktarımı varsayılan dışa aktarma (export default) kullanılarak yapılmalıdır.
JS kodu temiz ve anlaşılır olmalı, Prettier kullanılmalıdır.
Kullanılan kütüphane Redux Toolkit olmalıdır.
Stil CSS modülleri kullanılarak yapılmalıdır.


İletişim Kitabı

Üçüncü modül ödeviniz olan "İletişim Kitabı" uygulamanızın kodunu yeniden düzenleyin. Durum yönetimini Redux Toolkit kütüphanesi ile yerel React durumunun yerine ekleyin.



Klasörler ve Dosyalar

src klasöründe Redux ile ilgili dosyaları saklamak için redux adında bir klasör oluşturun:

store.js - store oluşturma dosyası
contactsSlice.js - iletişimler için dilim dosyası
filtersSlice.js - filtreler için dilim dosyası


Başlangıç Durumu

Redux başlangıç durumu aşağıdaki gibi olmalıdır.



{
  contacts: {
		items: []
	},
  filters: {
		name: ""
	}
}



Burada iki dilim ayırıyoruz - iletişimler (alan contacts) ve filtreler (alan filters).



İletişim Dilimi

contactsSlice.js dosyasında, createSlice() fonksiyonunu kullanarak iletişim dilimini tanımlayın.



dispatch içinde kullanılacak dilim eylemleri:

addContact — yeni bir iletişimi items özelliğine ekleme
deleteContact — items özelliğinden id ile iletişimi silme


useSelector içinde kullanılacak seçici fonksiyonları tanımlayın:

selectContacts — items özelliğinden iletişim listesini döndürür.


Dilimi dosyasından, redüktörü ve ayrıca eylemleri ve seçicileri dışa aktarın.



Filtre Dilimi

filtersSlice.js dosyasında, createSlice() fonksiyonunu kullanarak filtre dilimini tanımlayın.



dispatch içinde kullanılacak dilim eylemleri:

changeFilter — name özelliğindeki filtre değerini değiştirme


useSelector içinde kullanılacak seçici fonksiyonları tanımlayın:

selectNameFilter — name özelliğinden filtre değerini döndürür.


Dilimi dosyasından, redüktörü ve ayrıca eylemleri ve seçicileri dışa aktarın.



React Redux Kütüphanesi

React bileşenlerini React Redux kütüphanesinin useSelector ve useDispatch kütüphaneleri ile Redux mantığına bağlayın.



İletişim listesinde Contact kartı dışında tüm bileşenler hiçbir prop almamalıdır. Bunun yerine, bileşenler gerekli değerleri almak için useSelector hook’unu ve dilimlerin seçici fonksiyonlarını kullanmalıdır.



Eylemleri göndermek için bileşenler useDispatch hook’u ve daha önce tanımlanan dilim eylemlerini kullanır:

ContactsForm formu, gönderim sırasında iletişim ekleme eylemini gönderir.
Contact iletişim kartı, silme butonuna tıklanıldığında iletişimi silme eylemini gönderir.
SearchBox filtre alanı, metin kutusuna yazıldığında filtre değiştirme eylemini gönderir.


Redux Persist Kütüphanesi

İletişim dizisini yerel depolamada saklamak için Redux Persist kütüphanesini kullanın.



store.js dosyasında:

İletişim dilimindeki items alanını saklamak için bir yapılandırma oluşturun.
İletişim diliminin redüktörüne yapılandırmayı uygulamak için persistReducer kullanın.
PersistGate için persistor oluşturmak için persistStore kullanın.
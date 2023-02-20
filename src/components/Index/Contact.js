import BlackButton from '../Button/BlackButton';

const Contact = () => {
  const email = 'dalmoori.books@gmail.com';
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert('클립보드에 메일 주소가 복사 되었습니다.');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-3xl font-bold md:text-4xl">Contact</h1>

      <div>
        오탈자나 내용상의 오류를 발견하시면
        <br />
        하단 메일로 연락바랍니다.
      </div>

      <div className="flex gap-x-5">
        <a href={`mailto:${email}`} className="underline">
          {email}
        </a>
        <BlackButton text={'메일 주소 복사'} fn={copyEmail} />
      </div>
    </div>
  );
};

export default Contact;

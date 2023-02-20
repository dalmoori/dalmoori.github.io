import DefaultLayout from './components/Layout/DefaultLayout';
import { useParams } from 'react-router-dom';
import products from './common/products';
import { useEffect, useState } from 'react';
import covers from './common/covers';
import DetailSectionLayout from './components/Layout/DetailSectionLayout';

const Detail = () => {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState();

  useEffect(() => {
    const targetProduct = products.filter(
      (product) => parseInt(id) === product.id,
    );

    setProductInfo(...targetProduct);
  }, [id]);

  return (
    <DefaultLayout>
      {productInfo ? (
        <div className="flex flex-col items-center justify-center pb-16 gap-y-10 md:grid md:grid-cols-5 md:items-start md:gap-x-10">
          <div className="w-6/12 md:w-full md:col-span-2">
            <img src={covers[id]} alt={productInfo.title} />
          </div>

          <div className="flex flex-col items-center md:items-start gap-y-10 md:gap-y-5 md:col-span-3">
            <h1 className="text-2xl font-bold">{productInfo.title}</h1>

            <div className="flex gap-x-5">
              <div>
                <span className="mr-2 font-bold text-gray-400">출간일</span>
                {productInfo.date}
              </div>
              <div>
                <span className="mr-2 font-bold text-gray-400">저자</span>
                {productInfo.author}
              </div>
            </div>

            <div className="text-sm leading-6 text-left md:leading-7 md:text-base">
              {productInfo.summary}
            </div>

            {(productInfo.lecture || productInfo.repository) && (
              <DetailSectionLayout title="관련 링크">
                <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-3">
                  {productInfo.lecture?.map((lecture, index) => (
                    <div key={index}>
                      <a href={lecture} className="underline">{`강의 링크 (${
                        index + 1
                      })`}</a>
                    </div>
                  ))}

                  {productInfo.repository?.map((repo, index) => (
                    <div key={index}>
                      <a href={repo} className="underline">{`소스 코드 (${
                        index + 1
                      })`}</a>
                    </div>
                  ))}
                </div>
              </DetailSectionLayout>
            )}

            {productInfo.shop && (
              <DetailSectionLayout title="판매처">
                <div className="flex gap-x-3">
                  {productInfo.shop.map((shop, index) => (
                    <div key={index}>
                      <a href={shop.link} className="underline">
                        {shop.mall}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="text-sm leading-6 text-center md:text-left">
                  판매 중인 모든 도서는 교보문고, 예스24, 알라딘, 밀리의서재,
                  구글북스, 북큐브 등에서 구입 하실 수 있습니다.
                </div>
              </DetailSectionLayout>
            )}

            {productInfo.file && (
              <DetailSectionLayout title="지원 포맷 및 가격">
                {productInfo.file.map((file, index) => (
                  <div key={index} className="flex gap-x-3">
                    <div>{file}</div>
                    <div>
                      {new Intl.NumberFormat('ko-KR', {
                        style: 'currency',
                        currency: 'KRW',
                      }).format(productInfo.price[index])}
                    </div>
                  </div>
                ))}
              </DetailSectionLayout>
            )}
          </div>
        </div>
      ) : (
        <div>... Loading ...</div>
      )}
    </DefaultLayout>
  );
};

export default Detail;

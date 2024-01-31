import React from 'react';
import useSWR from 'swr';

export default function Page() {
  const fetcher = (url: string | URL | Request) =>
    fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    'https://www.jma.go.jp/bosai/forecast/data/forecast/100000.json',
    fetcher
  );
  if (isLoading) return <div>loading...</div>;
  console.log(data);
  return (
    <div>
        <h1 className="font-bold text-lg">群馬県</h1>
      {data[0].timeSeries[0].areas[0].area.name}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById('my_modal_7')!.showModal()}
      >
        予報を見る
      </button>
      <dialog id="my_modal_7" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {data[0].timeSeries[0].areas[0].area.name}
          </h3>
          <h4 className="text-lg">今日</h4>
          <p className="py-4">
            天気:{data[0].timeSeries[0].areas[0].weathers[0]}
          </p>
          <p className="py-4">風:{data[0].timeSeries[0].areas[0].winds[0]}</p>
          {/* <p className="py-4">
            うねり:{data[0].timeSeries[0].areas[0].waves[0]}
          </p> */}
          <h4 className="text-lg">明日</h4>
          <p className="py-4">
            天気:{data[0].timeSeries[0].areas[0].weathers[1]}
          </p>
          <p className="py-4">風:{data[0].timeSeries[0].areas[0].winds[1]}</p>
          {/* <p className="py-4">
            うねり:{data[0].timeSeries[0].areas[0].waves[1]}
          </p> */}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

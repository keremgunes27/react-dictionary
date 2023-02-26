function WordDetail({ detailData }) {
  //   console.log(detailData);
  //   console.log(detailData.definitions);
  return (
    <div className="border-b-2 border-gray-200 mb-8">
      <h2 className="text-2xl font-bold mb-3 ">{detailData.partOfSpeech}</h2>
      <h3 className="text-xl text-gray-500 font-bold mb-4">Meanings</h3>
      <div className="pl-8 mb-8">
        <ul className="list-disc">
          {detailData.definitions !== undefined
            ? detailData.definitions.map((e, i) => (
                <div key={i}>
                  <li className="mb-2">{e.definition}</li>
                  {e.example != undefined ? (
                    <p className="bg-yellow-100 mb-6 p-3">
                      Example: {e.example}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              ))
            : ""}
        </ul>

        {detailData.antonyms ? (
          detailData.antonyms != "" ? (
            <p className="bg-red-100 mb-2 p-3">
              Antonyms :
              {detailData.antonyms.map((eleman, index) => (
                <span key={index}> {eleman}</span>
              ))}
            </p>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        {detailData.synonyms ? (
          detailData.synonyms != "" ? (
            <p className="bg-red-100 mb-6 p-3">
              Synonyms :
              {detailData.synonyms.map((eleman, index) => (
                <span key={index}> {eleman}</span>
              ))}
            </p>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default WordDetail;

import axios from "axios";
import ReactAudioPlayer from "react-audio-player";
import { useState, useEffect } from "react";
import WordDetail from "./WordDetail";
import Error from "./Error";
import WelcomePage from "./WelcomePage";

function WordList({ wordText }) {
  const [dataWord, setDataWord] = useState("");
  const [dataAudio, setDataAudio] = useState("");
  const [dataPhonetic, setDataPhonetic] = useState("");
  const [dataMeanings, setDataMeanings] = useState([""]);
  const [sourceUrl, setSourceUrl] = useState([""]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, [wordText]);

  const fetchData = async () => {
    if (wordText !== "") {
      try {
        const res = await axios.get(
          "https://api.dictionaryapi.dev/api/v2/entries/en/" + wordText
        );
        setDataWord(res.data[0].word);
        setDataPhonetic(res.data[0].phonetic);
        setDataMeanings(res.data[0].meanings);
        setSourceUrl(res.data[0].sourceUrls);
        for (let i = 0; i < res.data[0].phonetics.length; i++) {
          if (res.data[0].phonetics[i].audio !== "") {
            setDataAudio(res.data[0].phonetics[i].audio);
          }
        }
        if (res.data[0].phonetics.length === 0) {
          setDataAudio(false);
        }
        setError(false);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    }
  };

  return (
    <>
      {!error ? (
        <>
          {wordText !== "" ? (
            <>
              <div className="flex items-center flex-wrap w-full mb-4 pb-4 border-b-2 border-gray-200">
                <div className="left">
                  <h1 className="text-4xl font-bold">{dataWord}</h1>
                  <p className="text-xl text-purple-600">{dataPhonetic}</p>
                </div>
                {dataAudio === false ? (
                  ""
                ) : (
                  <ReactAudioPlayer
                    className="ml-auto max-w-md w-full my-3"
                    src={dataAudio}
                    controls
                  />
                )}
              </div>
              {dataMeanings.map((detailData, index) => (
                <WordDetail key={index} detailData={detailData} />
              ))}
              <p className="mb-3 ">
                Source :
                <a
                  className="text-blue-600 ml-1 hover:underline"
                  target={"_blank"}
                  href={sourceUrl}
                  rel="noreferrer"
                >
                  {sourceUrl}
                </a>
              </p>
              <p className="text-center mt-2 text-sm">
                Developed with 💙 by{" "}
                <a
                  className="text-blue-600 hover:underline"
                  target={"_blank"}
                  href="keremgunes.com.tr"
                >
                  Kerem Güneş
                </a>
              </p>
            </>
          ) : (
            <WelcomePage />
          )}
        </>
      ) : (
        <Error />
      )}
    </>
  );
}

export default WordList;

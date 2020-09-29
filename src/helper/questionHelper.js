const AnswerCount = (AnswerData) => [
  ...AnswerData.reduce((mp, o) => {
    if (!mp.has(o.survey_headers_id === 1 ? o.questionId : o.keyValue))
      mp.set(o.survey_headers_id === 1 ? o.questionId : o.keyValue, {
        ...o,
        count: 0,
      });
    mp.get(o.survey_headers_id === 1 ? o.questionId : o.keyValue).count++;
    return mp;
  }, new Map()).values(),
];

const windowScrollTop = () =>
  // (document.getElementById("style-1").scrollTop = 0);
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

export { AnswerCount, windowScrollTop };

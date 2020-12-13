const invoke = require('../invoke');
const DetoxWebMatcherApi = require('./espressoapi/web/DetoxWebAtomMatcher');

class WebMatcher {

}

class IdMatcher extends WebMatcher {
  constructor(id) {
    super();
    this._call = invoke.callDirectly(DetoxWebMatcherApi.matcherForId(id));
  }
}

class ClassNameMatcher extends WebMatcher {
  constructor(className) {
    super();
    this._call = invoke.callDirectly(DetoxWebMatcherApi.matcherForClassName(className));
  }
}

class CssSelectorMatcher extends WebMatcher {
  constructor(cssSelector) {
    super();
    this._call = invoke.callDirectly(DetoxWebMatcherApi.matcherForCssSelector(cssSelector));
  }
}

class NameMatcher extends WebMatcher {
  constructor(name) {
    super();
    this._call = invoke.callDirectly(DetoxWebMatcherApi.matcherForName(name));
  }
}

class XPathMatcher extends WebMatcher {
  constructor(xpath) {
    super();
    this._call = invoke.callDirectly(DetoxWebMatcherApi.matcherForXPath(xpath));
  }
}

class LinkTextMatcher extends WebMatcher {
  constructor(linkText) {
    super();
    this._call = invoke.callDirectly(DetoxWebMatcherApi.matcherForLinkText(linkText));
  }
}

class PartialLinkTextMatcher extends WebMatcher {
  constructor(partialLinkText) {
    super();
    this._call = invoke.callDirectly(DetoxWebMatcherApi.matcherForPartialLinkText(partialLinkText));
  }
}

module.exports = {
  IdMatcher,
};
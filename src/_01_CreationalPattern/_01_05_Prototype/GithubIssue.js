import GithubRepository from "./GithubRepository.js";

export default class GithubIssue {
  /** @type { number } */
  #id;

  /**
   * 이슈명
   * @type { string }
   */
  #title;

  /**
   * 저장소
   * @type { GithubRepository }
   */
  #repository;

  /** @param { GithubRepository } repository */
  constructor(repository) {
    this.#repository = repository;
  }

  /** @returns { number } */
  getId() {
    return this.#id;
  }
  /** @param { number } id */
  setId(id) {
    this.#id = id;
  }

  /** @returns { string } */
  getTitle() {
    return this.#title;
  }
  /** @param { string } title */
  setTitle(title) {
    this.#title = title;
  }

  /** @returns { GithubRepository } */
  getRepository() {
    return this.#repository;
  }

  /** @returns { string } */
  getUrl() {
    return `
      URL: https://github.com/${this.#repository.getUser()}/${this.#repository.getName()}/${this.#id}
    `;
  }

  /**
   * Prototype 패턴 적용 메서드 (깊은복사로 구현한 예)
   * @returns { GithubIssue }
   */
  cloneDeep() {
    const originRepository = this.#repository;

    const clonedRepository = new GithubRepository();
    clonedRepository.setUser(originRepository.getUser());
    clonedRepository.setName(originRepository.getName());

    const issue = new GithubIssue(clonedRepository);
    issue.setId(this.#id);
    issue.setTitle(this.#title);

    return issue;
  }
}
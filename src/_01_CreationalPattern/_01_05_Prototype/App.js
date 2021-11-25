import GithubRepository from "./GithubRepository.js";
import GithubIssue from "./GithubIssue.js";

const repository = new GithubRepository();
repository.setUser("영우");
repository.setName("디자인 패턴 스터디");

const issue = new GithubIssue(repository);
issue.setId(1);
issue.setTitle("Prototype 패턴");

console.log(issue.getUrl());

const clonedIssue = issue.cloneDeep();

console.log(clonedIssue.getUrl());

issue.getRepository().setName("변경한 저장소 명");
console.log(issue.getUrl());
console.log(clonedIssue.getUrl());
console.log(`Prototype 복제 객체는 서로 다르다: ${issue !== clonedIssue}`);

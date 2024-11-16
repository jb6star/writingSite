package junsung.springboot.repositroy;

import junsung.springboot.domain.WritingList;

import org.springframework.data.jpa.repository.JpaRepository;

public interface Repo extends JpaRepository<WritingList, Long> {
}

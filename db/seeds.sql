INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('James', 'Fraser', 2, 8),
  ('Jack', 'London', 4, 5),
  ('Robert', 'Bruce', 1, 8),
  ('Peter', 'Greenaway', 3, 5),
  ('Derek', 'Jarman', 11, 7),
  ('Paolo', 'Pasolini', 11, 7),
  ('Heathcote', 'Williams', 5, 6),
  ('Sandy', 'Powell', 8, 9),
  ('Emil', 'Zola', 9, 9),
  ('Sissy', 'Coalpits', 3, 5),
  ('Antoinette', 'Capet', 4, 5),
  ('Samuel', 'Delany', 4, 5),
  ('Tony', 'Duvert', 10, 9),
  ('Dennis', 'Cooper', 6, 9),
  ('Monica', 'Bellucci', 7, 9),
  ('Samuel', 'Johnson', 11, 7),
  ('John', 'Dryden', 12, 9),
  ('Alexander', 'Pope', 3, 5),
  ('Lionel', 'Johnson', 4, 5),
  ('Aubrey', 'Beardsley', 1, 8),
  ('Tulse', 'Luper', 2, 8),
  ('William', 'Morris', 11, 7),
  ('George', 'Shaw', 4, 5),
  ('Arnold', 'Bennett', 5, 6),
  ('Algernon', 'Blackwood', 3, 5),
  ('Rhoda', 'Broughton', 3, 5),
  ('Hart', 'Crane', 4, 5),
  ('Vitorio', 'DeSica', 12, 9),
  ('Wilkie', 'Collins', 3, 5),
  ('Elizabeth', 'Gaskell', 4, 5),
  ('George', 'Sand', 11, 7),
  ('Vernon', 'Lee', 4, 5),
  ('Arthur', 'Machen', 4, 5),
  ('Frederick', 'Marryat', 3, 5),
  ('Harriet', 'Martineau', 4, 5),
  ('George', 'Meredith', 4, 5),
  ('Margaret', 'Oliphant', 5, 6),
  ('Anthony', 'Trollope', 3, 5),
  ('Charlotte', 'Yonge', 4, 5);
  

INSERT INTO departments (name)
VALUES
  ('Accounting'),
  ('Engineering'),
  ('Human Resources'),
  ('Marketing'),
  ('Sales'),
  ('Senior Management');

INSERT INTO roles
  (role_title, departments_id, salary)
VALUES
  ('Accounts Receivable', 1, 65000),
  ('Accounts Payable', 1, 65000),
  ('Jr. Developer', 2, 90000),
  ('Sr. Developer', 2, 150000),
  ('Engineering Manager', 2, 200000),
  ('VP Sales', 6, 225000),
  ('VP Finance', 6, 235000),
  ('CEO', 6, 300000),
  ('HR Director', 3, 200000),
  ('Regional Sales Mgr', 5, 185000),
  ('Senior Marketing Manager', 4, 200000);
  
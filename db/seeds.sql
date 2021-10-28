INSERT INTO department (name)
VALUES ('Product Development'),
        ('Client Relations'),
        ('Application Support');


INSERT INTO role (title,salary,department_id)
VALUES ('Software Engineer', 120000.00, 1 ),
        ('Scrum Master', 160000.00, 1),
        ('Sales Manager', 130000.00, 2),
        ('Support Specialist', 90000.00, 3);

INSERT INTO employee (first_name,last_name,role_id)
VALUES ('Mat','Lundin',1),
        ('Bob', 'Odenkirk', 2)
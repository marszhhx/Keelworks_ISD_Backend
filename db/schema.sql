
DROP DATABASE IF EXISTS isd_db;

CREATE DATABASE isd_db;

USE isd_db;

DROP TABLE IF EXISTS new_request_form, needs_analysis, objective, final_assessment_strat, course_structure, course_strategy_document, storyboard;


CREATE TABLE needs_analysis(
    submission_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(255),
    problem_data VARCHAR(50),
    problem_statement VARCHAR(50),
    success_statement TEXT,
    audience_definition TEXT,
    audience_benefits TEXT,
    audience_needs TEXT,
    change_issues TEXT,
    tech_issues TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE objective(
    terminal_objective TEXT,
    enabling_objective TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE final_assesment_strat(
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE course_structure(
    module_heading VARCHAR(50),
    lesson_heading VARCHAR(50),
    lesson_details VARCHAR(50),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE course_strategy_document(
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE storyboard(
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


import { Navbar, Group, Code, ScrollArea, createStyles, rem } from '@mantine/core';
import {
  IconHome,
  IconMan,
  IconBook,
  IconMail
} from '@tabler/icons-react';
import { UserButton } from './UserButton';
import { LinksGroup } from './NavbarLinksGroup';
import React, { useContext } from 'react';
import { AppContext } from '../App';



const useStyles = createStyles((theme) => ({

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function NavbarNested() {

  const { role } = useContext(AppContext);

  const mockdata = [
    { label: 'Dashboard', icon: IconHome, links: [["hod"].includes(role) && {link : `/dashboard-${role}` , label : 'Home'}].filter((item) => item !== false)  },
    {
      label: 'Student',
      icon: IconMan,
      initiallyOpened: true,
      links: [
        ["admin"].includes(role) && { label: 'Add Student', link: '/create-student' },
        ["admin","faculty","hod","tto","tpo"].includes(role) && { label: 'View Students', link: '/all-student' },
        ["faculty"].includes(role) && { label: 'Marks Entry', link: '/marks-entry' },
        ["student"].includes(role) && { label: 'Exam Result', link: '/' },
        ["tto","student","faculty","hod"].includes(role) && { label: 'View TimeTable', link: '/display-timetable' },
      ].filter((item) => item !== false),
    },
    {
      label: 'HOD',
      icon: IconMan,
      initiallyOpened: true,
      links: [
        ["hod"].includes(role) && { label: 'Add HOD', link: '/create-hod' },
        ["hod"].includes(role) && { label: 'View HOD', link: '/all-hod' },
      ].filter((item) => item !== false),
    },
    {
      label: 'Faculty',
      icon: IconMan,
      links: [
        ["admin"].includes(role) && { label: 'Add Faculty', link: '/create-faculty' },
        ["hod","faculty","admin"].includes(role) && { label: 'View Faculty', link: '/all-faculty' },
      ].filter((item) => item !== false),
    },
    {
      label: 'Admin',
      icon: IconMan,
      links: [
        ["hod"].includes(role) && { label: 'Add Admin', link: '/create-admin' },
        ["admin","hod"].includes(role) && { label: 'View Admin', link: '/all-admin' },
      ].filter((item) => item !== false),
    },
    {
      label: 'TPO',
      icon: IconMan,
      links: [
        ["admin"].includes(role) && { label: 'Add TPO', link: '/create-tpo' },
        ["admin","hod","tpo"].includes(role) && { label: 'View TPO', link: '/all-tpo' },
        ["tpo","hod","student"].includes(role) && { label: 'View Placement Company', link: '/all-placement-company' },
        ["tpo"].includes(role) && { label: 'Add Placement Company', link: '/add-placement-company' },
      ].filter((item) => item !== false),
    },
    {
      label: 'TTO',
      icon: IconMan,
      links: [
        ["admin"].includes(role) && { label: 'Add TTO', link: '/create-tto' },
        ["admin","tto","hod"].includes(role) && { label: 'View TTO', link: '/all-tto' },
        ["tto","hod"].includes(role) && { label: 'View TimeTable', link: '/display-timetable' },
        ["tto"].includes(role) && { label: 'Add TimeTable', link: '/add-timetable' },
      ].filter((item) => item !== false),
    },
    {
      label: 'Course',
      icon: IconBook,
      links: [
        ["admin"].includes(role) && { label: 'Create Course', link: '/create-course' },
        ["student"].includes(role) && { label: 'View Current Course', link: '/current-course' },
        ["admin","hod","student","faculty"].includes(role) && { label: 'View Courses', link: '/all-course' },
      ].filter((item) => item !== false),
    },
    { label: 'Make Announcement', icon: IconMail, links: [["tto","tpo","hod","faculty","admin","student"].includes(role) && { link: '/make-announcement', label: 'Make email' }] },
    { label: 'Logout', icon: IconMail, links: [{ link: '/logout', label: 'Logout' }] },

  ];

  mockdata.map((item) => {
    if (item.links.length === 0)
    {
      // remove that item
      mockdata.splice(mockdata.indexOf(item), 1);
    }
  });
  
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  const [isCollapse, setIsCollapse] = React.useState("");

  const Collapse = () => {
    if (isCollapse === "")
    {
      setIsCollapse("collapse");
    }
    else
    {
      setIsCollapse("");
    }
  }


  return (
    <>
      <button onClick={Collapse}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg></button>
      <div className={isCollapse}>
        <Navbar height={800} width={{ sm: 300 }} p="md" className="bg-white py-0 h-screen sticky">
        <Navbar.Section className={classes.header}>
          <Group position="apart">
              <Code sx={{ fontWeight: 700 }}>DDU-UMS</Code>
              
          </Group>
        </Navbar.Section>

        <Navbar.Section grow className={classes.links} component={ScrollArea}>
          <div className={classes.linksInner}>{links}</div>
        </Navbar.Section>

        <Navbar.Section className={classes.footer}>
          <UserButton
            name={localStorage.getItem("id")}
            email={localStorage.getItem("email")}
          />
        </Navbar.Section>
      </Navbar>
      </div>
    </>
  );
}

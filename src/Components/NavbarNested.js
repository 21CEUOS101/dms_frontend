import { Navbar, Group, Code, ScrollArea, createStyles, rem } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  // IconPresentationAnalytics,
  // IconFileAnalytics,
  // IconAdjustments,
  // IconLock,
} from '@tabler/icons-react';
import { UserButton } from './UserButton';
import { LinksGroup } from './NavbarLinksGroup';
import React from 'react';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  { label: 'Profile', icon: IconGauge },
  {
    label: 'Student',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Add Student', link: '/create-student' },
      { label: 'View Student', link: '/' },
      { label: 'Update Student', link: '/' },
      { label: 'Marks Entry', link: '/' },
      { label: 'Exam Result', link: '/' },
      { label: 'Fees', link: '/' },
      { label: 'View TimeTable', link: '/' },
    ],
  },
  {
    label: 'Faculty',
    icon: IconCalendarStats,
    links: [
      { label: 'Add Faculty', link: '/create-faculty' },
      { label: 'View Faculty', link: '/' },
      { label: 'Update Faculty', link: '/' },
    ],
  },
  {
    label: 'TPO',
    icon: IconCalendarStats,
    links: [
      { label: 'Add TPO', link: '/create-tpo' },
      { label: 'View TPO', link: '/' },
      { label: 'Update TPO', link: '/' },
      { label: 'View Placement Company', link: '/' },
      { label: 'Add Placement Company', link: '/' },
      { label: 'Update Placement Company', link: '/' },
    ],
  },
  {
    label: 'TTO',
    icon: IconCalendarStats,
    links: [
      { label: 'Add TTO', link: '/create-tto' },
      { label: 'View TTO', link: '/' },
      { label: 'Update TTO', link: '/' },
      { label: 'View TimeTable', link: '/' },
      { label: 'Update TimeTable', link: '/' },
      { label: 'Add TimeTable', link: '/' },
    ],
  },
  {
    label: 'Course',
    icon: IconCalendarStats,
    links: [
      { label: 'Create Course', link: '/create-course' },
      { label: 'View Course', link: '/' },
      { label: 'Update Course', link: '/' },
    ],
  },
  { label: 'Make Announcement', icon: IconGauge },

];

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
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar height={800} width={{ sm: 300 }} p="md" className="bg-white py-0 h-screen">
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton
          name="Ashish H. Prajapati"
          email="prajapatiashish40567@gmail.com"
        />
      </Navbar.Section>
    </Navbar>
  );
}
